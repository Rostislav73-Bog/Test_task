from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.get("/")
async def root():
    return ("Hello")

@app.websocket("/ws")
async def websocket_endpoint(websocket:WebSocket):
    print("Accepting Connection")
    await websocket.accept()
    while True:
        try:
            data = await websocket.receive_text()
            await websocket.send_text("Sending from Server")
            print(data)
        except:
            pass
            break
