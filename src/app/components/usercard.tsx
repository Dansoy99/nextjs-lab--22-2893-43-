interface UserCardProps{
    name: string;
    role: string;
    location: string;
}

export default function UserCard({name, role, location}: UserCardProps){
    const userLocation = location ?? "Unknown Location";
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Role: {role}</p>
            <p>Location: {userLocation}</p>
        </div>
    );
}

