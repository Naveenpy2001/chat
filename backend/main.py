from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import httpx

import os
from dotenv import load_dotenv

load_dotenv()

groq_api_key = os.getenv("GROQ_API_KEY")


app = FastAPI()

# Enable CORS for all origins (you can restrict in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class Message(BaseModel):
    text: str
    sender: str  # 'user' or 'ai'

class ChatRequest(BaseModel):
    message: str
    conversation_history: List[Message] = []

# Chat endpoint
@app.post("/chat")
async def chat_with_groq(request: ChatRequest):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {groq_api_key}"
    }

    # Format messages for Groq
    formatted_messages = []
    for msg in request.conversation_history:
        role = "user" if msg.sender == "user" else "assistant"
        formatted_messages.append({"role": role, "content": msg.text})

    # Add the new user message
    formatted_messages.append({"role": "user", "content": request.message})

    payload = {
        "model": "llama3-70b-8192",
        "messages": formatted_messages,
        "temperature": 0.7,
        "max_tokens": 256
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.groq.com/openai/v1/chat/completions",
                headers=headers,
                json=payload
            )
            response.raise_for_status()
            result = response.json()
            return {
                "response": result["choices"][0]["message"]["content"],
                "status": "success"
            }

    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=f"Groq API error: {e.response.text}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

# Run with: uvicorn main:app --reload


# Run the server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
