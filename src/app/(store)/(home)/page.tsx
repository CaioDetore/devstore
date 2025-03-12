export default async function Home() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(null)
    }, 2000),
  )

  return <div>hello world</div>
}
