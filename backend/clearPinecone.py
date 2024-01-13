import re
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

# pinecone.delete_index(index_name)
index = pinecone.Index(index_name)

index.delete(delete_all=True, namespace="MATH2030")

# pinecone.create_index(name=index_name, metric="cosine", dimension=1024)
