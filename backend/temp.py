import re
import os
from dotenv import load_dotenv, find_dotenv

from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Pinecone
from langchain.schema.document import Document

from langchain.embeddings import CohereEmbeddings

load_dotenv(find_dotenv() )

COHERE_API_KEY = os.environ['COHERE_API_KEY']

import pinecone
from langchain_community.document_loaders import UnstructuredFileLoader
from langchain_community.document_loaders import PyMuPDFLoader


# initialize pinecone
index_name = "langchain"

pinecone.init(
    api_key=os.environ['PINECONE_API_KEY'],
    environment=os.environ['PINECONE_ENVIRONMENT']
)

# pinecone_index = pinecone.Index(index_name)
# print(pinecone_index.describe_index_stats())

# loader = TextLoader("../../modules/state_of_the_union.txt")
# documents = loader.load()
# loader = UnstructuredFileLoader("./data/TheoryOfComputation  michel.pdf")
loader = PyMuPDFLoader("./data/TheoryOfComputation  michel.pdf")

documents = loader.load()
embeddings = CohereEmbeddings(model="embed-multilingual-v3.0", cohere_api_key=COHERE_API_KEY)

# metadata = {"pageUrl": pageUrl, "offerPrice": offerPrice, "productId": productId,
#             "availability": availability, "productType": productType, "title": title, "specs": specs, "lang": lang,
#             "brand": brand}
# documents = [Document(page_content=text, metadata=metadata)]

text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
docs = text_splitter.split_documents(documents)
embeddings = CohereEmbeddings(model="embed-multilingual-v3.0", cohere_api_key=COHERE_API_KEY)

# First, check if our index already exists. If it doesn't, we create it
if index_name not in pinecone.list_indexes():
    # create a new index
    pinecone.create_index(name=index_name, metric="cosine", dimension=1024)

docsearch = Pinecone.from_documents(docs, embeddings, index_name=index_name)
# query = "What is a DFA?"
# retriever = docsearch.as_retriever(search_type="mmr")
# matched_docs = retriever.get_relevant_documents(query)
# for i, d in enumerate(matched_docs):
#     print(f"\n## Document {i}\n")
#     print(d.page_content)
# if you already have an index, you can load it like this
# docsearch = Pinecone.from_existing_index(index_name, embeddings)
