const SUPABASE_URL = "https://tthrhkeqhaiftdmimkwm.supabase.co/rest/v1/tasks";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aHJoa2VxaGFpZnRkbWlta3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NTQzODMsImV4cCI6MjA4NzAzMDM4M30.Fjkr4uI8QWXi9_9SwClNaaTPLhlUK7Nw3dMerBtEvAk";

async function buscarTasks() {
  try {
    const response = await fetch(SUPABASE_URL, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json"
      }
    });

    

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro:", error);
  }
}

buscarTasks();