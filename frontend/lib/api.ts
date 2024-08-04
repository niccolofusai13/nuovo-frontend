// lib/api.ts

interface SearchRequest {
  text: string;
  image_url: string;
  num_results: number;
  indice_name: string;
}

interface SearchResult {
  key: string;
  caption: string;
  url: string;
  score: number;
}

interface SearchResponse {
  results: SearchResult[];
}

export async function searchImages(query: string, isImage: boolean): Promise<SearchResult[]> {
  const request: SearchRequest = {
    text: isImage ? '' : query,
    image_url: isImage ? query : '',
    num_results: 100,
    indice_name: 'coco'
  };

  try {
    const response = await fetch('http://129.146.75.243:8024/api/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: SearchResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}