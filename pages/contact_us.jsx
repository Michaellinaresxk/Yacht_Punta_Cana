import dynamic from "next/dynamic";
import { ContactHero } from "../components/hero/ContactHero";
import { ContactGroupIcons } from "../components/icons/ContactGroupIcons";
import { Footer } from "../components/Footer";
import { FormComponent } from "../components/FormComponent";
import { NewMap } from "../components/map/NewMap";

	return (
		<>
			<ContactHero />
			<ContactGroupIcons />
			<NewMap />
			<FormComponent />
			<Footer />
		</>
	);
}

export default contact_us;
