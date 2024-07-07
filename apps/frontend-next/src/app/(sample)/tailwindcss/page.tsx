import Link from "next/link";
import fs from 'fs';
import path from 'path';

export default function Home() {
  // function getFiles(dir: string, fileList: string[] = []) {
  //   const files = fs.readdirSync(dir);

  //   files.forEach((file) => {
  //     const filePath = path.join(dir, file);
  //     const stat = fs.statSync(filePath);
  
  //     if (stat.isDirectory()) {
  //       getFiles(filePath, fileList);
  //     } else if (path.extname(file) === '.js' && file === 'page.js') {
  //       fileList.push(filePath as any);
  //     }
  //   });
  // }
  // const directoryPath = path.join(__dirname,);
  // console.log(__dirname);
  // const pageFiles = getFiles(directoryPath);

  // console.log(pageFiles);

  const routeList = [
    'typography',
    'border',
    'responsive',
    'flex',
    'grid',
    'position',
  ]
    
  return (
    <main className="flex min-h-screen bg-white text-black flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full">

        { routeList.map((route) => (
          <Link 
            key={route}
            href={`/tailwindcss/${route}`}
            className="underline text-blue-800"
          >
            <p>{route}</p>
          </Link>
        )
        )}

      </div>
      </main>
  )

}