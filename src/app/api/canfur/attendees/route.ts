import fs from 'fs';
import path from 'path';

export async function GET(request: any) {
  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), 'data', 'database.json');

  try {
    // Read the current state from the JSON file
    const data = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(data);
    let number = json.number;

    // Increment the number
    number += 1;

    // Write the new state back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify({ number }), 'utf8');

    // Respond with the updated number
    return new Response(JSON.stringify({ number }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
