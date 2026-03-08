import Hello from "./components/hello";
import UserCard from "./components/UserCard";
import Counter from "./components/counter";

export default function Home() {
  return (
    <main className="p-6">
      <Hello />
      <UserCard
        name="Nathaniel C. Alvarez"
        role="Software Engineer"
        location="Iloilo City, Philippines"
      />
      <Counter />
    </main>
  );
}