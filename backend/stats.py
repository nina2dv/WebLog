import os
from dotenv import load_dotenv, find_dotenv

from langchain_community.vectorstores import Pinecone


load_dotenv(find_dotenv() )

COHERE_API_KEY = os.environ['COHERE_API_KEY']

import pinecone

# initialize pinecone
index_name = "langchain"

pinecone.init(
    api_key=os.environ['PINECONE_API_KEY'],
    environment=os.environ['PINECONE_ENVIRONMENT']
)
pinecone_index = pinecone.Index(index_name)

print(pinecone_index.describe_index_stats())