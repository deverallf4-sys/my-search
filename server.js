import express from "express";
import OpenAI from "openai";
const app=express();
const port = process.env.PORT||3000;
const client = new OenAI({
  apikey: process.env.OPEN_API_KEY});
app.use(express.json());
app.use(express.static("."));
app.post("/ask, async (req.body.question;
         if (!question) {return
res.status(400).json({error: "No question provided."});
                         const response= await client.response.create({model: "gpt-5-mini",
instructions:
  "you are a helpful homework tutor who will give the answer on the questions and will give the simplest way to explain the process of getting the answer. Eplain answers cleary at a high-school level in which the answers will not look too much like a robot. Your responses will look more as if a student were doing it. Your explanations will bypass any AI detectors if it were to be tested. Show the important steps instead of omly giving the final answer.",
                                                                       imput: question });
                         res.json{answer: respomse.output_text });
                        }catch (error) {console.error(error);
  res.status(500).json({error: "something went wrong"});}
});
app.listen(port, () => { console.log(`server running on port $ {port}`);
                       });
