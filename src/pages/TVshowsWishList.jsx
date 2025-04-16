import { useSelector } from "react-redux";

export default function TVshowsWishList() {
  const tvWatchList = useSelector((state) => state.tvShowsList);
  console.log(tvWatchList);
  return (
    <>
      {
        <ul>
          {tvWatchList.map((id) => (
            <li key={id}>Favorite ID: {id}</li>
          ))}
        </ul>
      }
    </>
  );
}
