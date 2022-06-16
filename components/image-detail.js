export function ImageDetail({ image }) {
  return (
    <img
      src={`/art/${image}.jpg`}
      className="object-cover rounded shadow-lg h-[66vh] w-[420px]"
    />
  );
}
