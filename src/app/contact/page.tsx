import { revalidatePath } from "next/cache";

export default function ContactPage(){
    async function submitForm(data: FormData){
        "use server"

        const name = data.get("name")
        const email = data.get("email")
        const message = data.get("message")

        console.log({name, email, message})

        revalidatePath("/contact")
    }
    return(
        <div className="p-6 max-w-md">
      <h1 className="text-2xl font-bold mb-4">
        Contact Us
      </h1>

      <form action={submitForm} className="space-y-4">

        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
        />

        <textarea
          name="message"
          placeholder="Message"
          className="border p-2 w-full"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>

      </form>
    </div>
    )
}