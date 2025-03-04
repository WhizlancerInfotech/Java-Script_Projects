export default function Portfolio() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <p className="text-gray-600">I am a web developer skilled in React.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Projects</h2>
      <ul className="list-disc list-inside">
        <li>Chat App</li>
        <li>E-Commerce Store</li>
        <li>Blog Platform</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">Contact</h2>
      <p>Email: myemail@example.com</p>
      <p>GitHub: github.com/myprofile</p>
    </div>
  );
}
