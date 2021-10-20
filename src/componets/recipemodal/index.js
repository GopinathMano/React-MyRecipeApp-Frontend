import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MYContext } from "../../context";
import axios from "../../Axios";
import { FaYoutube } from "react-icons/fa";

function RecipeModal({ title, instruction, recipeId, youtube, category }) {
  const { user, setUser } = useContext(MYContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddFav = () => {
    setLoading(true);
    axios
      .post("/add-fav", { recipeId: recipeId })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemoveFav = () => {
    setLoading(true);
    axios
      .post("/remove-fav", { recipeId: recipeId })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
        alert("Recipe Removed from favourite");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <p className="badge bg-success"> {category}</p> <br />
      <Button variant="primary" onClick={handleShow}>
        See More
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {instruction.split(".").map((sentence, idx) => (
            <p key={idx}>{sentence}</p>
          ))}{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {user && (
            <>
              {user.favorite.includes(recipeId) ? (
                <Button
                  disabled={loading}
                  variant="danger"
                  onClick={handleRemoveFav}
                >
                  Remove Fav
                </Button>
              ) : (
                <Button
                  disabled={loading}
                  variant="success"
                  onClick={handleAddFav}
                >
                  Add to fav
                </Button>
              )}
            </>
          )}
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecipeModal;
