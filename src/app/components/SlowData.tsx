export default async function SlowData(){
    await new Promise((resolve) =>setTimeout(resolve, 3000))

    return(
        <p className="text-green-600">
            Slow data loaded after 3 seconds
        </p>
    )
}