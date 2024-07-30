export async function GET(request: Request) {
    console.log("Location Update")

    return Response.json({
        msg: "Ok"
    })
}