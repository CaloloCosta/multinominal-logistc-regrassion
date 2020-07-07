# on the julia repm
using JuliaWebAPI   #Load package

# #Create the ZMQ client that talks to the ZMQ listener above
const apiclnt = APIInvoker("tcp://127.0.0.1:9000");

# #Start the HTTP server in current process (Ctrl+C to interrupt)
run_http(apiclnt, 4000)