const webSocket = new WebSocket("")

let username
function sendUsername(){
    username = document.getElementById("usename-input").value

    sendData({
        type: "store_user"

    })
}

function sendData(data){
    data.username = username
    webSocket.send(JSON.stringify(data))
}

let localStream
function startCall(){
    document.getElementById("video-call-div")
    .style.display = "inline"

    navigator.getUserMedia({
        video: {
            frameRate: 24,
            width:{
                min: 480, ideal: 720, max: 1280

            },
            aspectRatio: 1.33333
        },
        audio: true},
        (stream) => {
            localStream = stream
            document.getElementById("local-video").srcObject = localStream
        },
        (error) =>{
            console.log(error)

        
    })
}
