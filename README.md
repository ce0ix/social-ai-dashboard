# AI Social Media Trend Dashboard

Bu proje AI destekli sosyal medya trend ve sentiment analiz dashboard örneğidir.

## Backend

Python + FastAPI ile çalışır.

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Frontend

Next.js + React + Recharts ile dashboard.

```bash
cd frontend
npm install
npm run dev
```

Ardından tarayıcıda `http://localhost:3000` açın.
