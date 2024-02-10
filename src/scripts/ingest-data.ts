import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { pinecone } from "@/libs/pinecone";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";

/* Name of directory to retrieve your files from 
   Make sure to add your PDF files inside the 'docs' folder
*/
const filePath = "public/docs";

export const run = async () => {
	try {
		
	} catch (error) {
		console.log("error", error);
		throw new Error("Failed to ingest your data");
	}
};

(async () => {
	await run();
	console.log("ingestion complete");
})();
