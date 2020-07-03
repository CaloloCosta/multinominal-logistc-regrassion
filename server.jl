
# Load required packages
using JuliaWebAPI
using JLD, PyCallJLD, ScikitLearn
model = JLD.load("CourseAllocation.jld", "model") 


function guess(arg1)
    val = split(arg1,"%2")
    val = [parse(Int, x) for x in val]
    println(val)
    return (predict(model,[val]))
end

# Expose testfn1 
process(
    JuliaWebAPI.create_responder([
        (guess, true)
    ], "tcp://127.0.0.1:9999", true, "")
)

# on the julia repm
# using JuliaWebAPI   #Load package

# #Create the ZMQ client that talks to the ZMQ listener above
# const apiclnt = APIInvoker("tcp://127.0.0.1:9999");

# #Start the HTTP server in current process (Ctrl+C to interrupt)
# run_http(apiclnt, 8888)