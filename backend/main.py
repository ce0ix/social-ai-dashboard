from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TrendRequest(BaseModel):
    hashtags: list[str]

@app.post("/api/trends")
async def get_trends(req: TrendRequest):
    # Mock veri: rastgele sentiment skorları
    response = []
    for tag in req.hashtags:
        response.append({
            "hashtag": tag,
            "sentiment": random.choice(["positive", "neutral", "negative"]),
            "score": round(random.uniform(-1,1),2)
        })
    return {"trends": response}
