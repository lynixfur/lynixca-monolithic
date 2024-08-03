import fs from 'fs';
import path from 'path';

export async function GET(request: any) {
  // Define the path to the text file
  const filePath = path.join(process.cwd(), 'data', 'number.txt');

  try {
    // Read the current number from the file
    const data = fs.readFileSync(filePath, 'utf8');
    let number = parseInt(data, 10);

    // Check if the number is valid
    if (isNaN(number)) {
      return new Response(JSON.stringify({ message: 'Invalid number in file' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Increment the number
    number += 1;

    // Write the new number back to the file
    fs.writeFileSync(filePath, number.toString(), 'utf8');

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
