import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

import Typography from "@mui/material/Typography";
import { CardActionArea, Modal } from "@mui/material";

export default function MediaCard({ data }) {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState("");
  const [cur, setCur] = React.useState("");
  const [border, setBorder] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { population, capital, flags, region, name } = data;

  React.useEffect(() => {
    for (let key in data.languages) {
      setLang(data.languages[key]);
      break;
    }
    for (let key in data.currencies) {
      setCur(data.currencies[key].name);
      break;
    }
    setBorder(data.borders);
  }, []);

  const style = {
    // border: '4px solid red',
    paddingleft:"30px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // console.log(data);
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="140"
        image={data.flags.png}
        alt="green iguana"
      />

      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {data.name.official}
        </Typography>
        <Typography variant="h7" color="text.secondary">
          {/* {`Population:  `}  */}
          <strong>Population: </strong> {data.population}
        </Typography>
        <br />
        <Typography variant="h7" color="text.secondary">
          {/* {`Region:  `} */}
          <strong>Region: </strong> {data.region}
        </Typography>
        <br />

        <Typography variant="h7" color="text.secondary">
          {/* {`Capital:  `} */}
          <strong>Capital: </strong> {data.capital}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          // style={{marginLeft:"100px"}}
          size="small"
          onClick={handleOpen}
        >
          {" "}
          More details{" "}
        </Button>

        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography> */}

            <Typography sx={{ mt: 2 }}>
              <strong>Native name: </strong> {data.name.common}
            </Typography>

            <Typography sx={{ mt: 2 }}>
              <strong>Sub Region: </strong> {data.subregion}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Currency Name: </strong> {cur}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Language Name: </strong> {lang}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Border Countries: </strong>
              <ol>{border && border.map((e, i) => <li key={i}>{e}</li>)}</ol>
            </Typography>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}
