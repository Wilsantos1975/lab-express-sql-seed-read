//middleware for validations

const checkBoolean = (is_favorite) => {
 if( typeof is_favorite === "boolean") {
    return is_favorite
 }  
  if (is_favorite === "false") {
     return false;
  } else if (is_favorite === "true") {
    return true;
  }
};

const checkSong = (req, res, next) => {
    const isFavorite =  checkBoolean(req.body.is_favorite);
console.log(isFavorite, "hello")
  if (
    req.body &&
    req.body.name &&
    req.body.artist &&
    typeof isFavorite === "boolean"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({
        error: "Body is missing information or body is not present at all",
      });
  }
};

module.exports = { checkSong };
