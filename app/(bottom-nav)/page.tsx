export default async function Home() {
  const test = process.env.TEST;
  return <div>{test}</div>;
}
