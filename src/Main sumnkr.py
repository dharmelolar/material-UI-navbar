from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allowing CORS for the React app to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with your React app's URL
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/plc_tag")
def read_plc_tag(request: Request):
    data = request.query_params["data"]
    reversed_data = reversed(data)
    print(f"Returning {reversed_data}")
    return {"reversed": reversed_data}
