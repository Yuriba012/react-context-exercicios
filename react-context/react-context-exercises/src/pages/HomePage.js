import Card from "../components/Card";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export function HomePage() {
  const { usersList, setUsersList } = useContext(GlobalContext);
  const [selectedId, setSelectedId] = useState("");

    const handleSelect = (currentId) =>{
        console.log(currentId)
        setSelectedId(currentId)
    }

  return (
    <div>
      <p>teste</p>
      {usersList.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            selectedId={selectedId}
            handleSelect={handleSelect}
          />
        );
      })}
    </div>
  );
}
