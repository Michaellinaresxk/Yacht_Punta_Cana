import { Paper } from "@mui/material";

export const ServicesHero = () => {
	return (
		<>
			<Paper
				sx={{
					backgroundImage:
						"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124919/services_oif68t.png)",
					maxWidth: "100%",
					height: "700px",
					backgroundPosition: "50% 50%",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			></Paper>
		</>
	);
};