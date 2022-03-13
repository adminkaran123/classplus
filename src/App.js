import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./components/Search";
import Modal from "./components/Modal";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const App = () => {
  const [items, setItems] = useState([]);

  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(100);
  const [search, setSearch] = useState("");
  const [searchedText, setSearchedText] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const fetchPhotos = (search = "", reset = false) => {
    if (totalPage <= currentPage) {
      setHasMore(false);
      return;
    }
    let url =
      "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent";
    if (search !== "") {
      url =
        "https://www.flickr.com/services/rest/?method=flickr.photos.search&text=" +
        search;
    }
    fetch(
      url +
        "&api_key=" +
        process.env.REACT_APP_FLICKER_KEY +
        "&page=" +
        currentPage +
        "&per_page=10&format=json&nojsoncallback=1"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCurrentPage(res.photos.page + 1);
        if (res.photos.photo.length == 0) {
          setHasMore(false);
          return;
        }
        if (res.photos.page > 1) {
          setItems(items.concat(res.photos.photo));
          setTotalPage(res.photos.pages);
        } else {
          setItems(res.photos.photo);
        }
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Photo Gallery</h3>
      </header>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={(search) => {
          setHasMore(true);
          setSearchedText(search);
          setItems([]);
          setCurrentPage(1);
          fetchPhotos(search, true);
        }}
      />
      {searchedText != "" && (
        <h4 className="search_info">Showing Results for {searchedText}</h4>
      )}
      <InfiniteScroll
        dataLength={items.length}
        next={() => fetchPhotos(search)}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <strong>
              {items.length == "0"
                ? "No Result Found"
                : "Yay! You have seen it all"}
            </strong>
          </p>
        }
      >
        <div className="gallery">
          {items.map((item) => {
            return (
              <div
                className="photo-item"
                key={item.id}
                onClick={() => {
                  setSelectedImage(
                    `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
                  );
                }}
              >
                <img
                  src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      <Modal img={selectedImage} onClose={() => setSelectedImage("")} />
    </div>
  );
};

export default App;
