from flask import Flask, request, jsonify
import pickle
import difflib

app = Flask(__name__)

# Load ML files
with open('../movie_dict.pkl', 'rb') as f:
    movie_dict = pickle.load(f)

with open('../similarityscore.pkl', 'rb') as f:
    similarity = pickle.load(f)

# FIXED LINE
movies = list(movie_dict['title'].values())

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()

    if not data or 'movie' not in data:
        return jsonify({"error": "Movie name not provided"}), 400

    movie_name = data['movie']

    close_matches = difflib.get_close_matches(movie_name, movies)

    if not close_matches:
        return jsonify({"error": "Movie not found"}), 404

    close_match = close_matches[0]
    index = movies.index(close_match)

    similarity_scores = list(enumerate(similarity[index]))
    sorted_movies = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

    recommended_movies = []
    for i in range(1, 6):
        movie_index = sorted_movies[i][0]
        recommended_movies.append(movies[movie_index])

    return jsonify({
        "input_movie": movie_name,
        "recommended_movies": recommended_movies
    })

if __name__ == "__main__":
    app.run(debug=True)
