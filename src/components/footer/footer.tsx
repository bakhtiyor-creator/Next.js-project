import { Box, Typography, ButtonGroup, Button } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      padding={"26px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Typography>
        © {format(new Date(), "yyyy")} Bakhti. All Right Reserved{" "}
      </Typography>
      <Box sx={{display: 'flex', gap: '15px'}}>
        <TelegramIcon sx={{ cursor: "pointer" }} />
        <InstagramIcon sx={{ cursor: "pointer" }} />
        <GitHubIcon sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default Footer;
