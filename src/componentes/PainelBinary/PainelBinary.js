import React from "react";
import { PainelBinary } from "./PainelBinaryElementos";
import Iframe from "react-iframe";
import Embed from "react-embed";

const BinaryPainel = () => {
	return (
		<>
			<PainelBinary>
				<Iframe
					url="https://www.deriv.com"
					width="80%"
					height="100%"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"
					sandbox="allow-forms
                    allow-modals
                    allow-orientation-lock
                    allow-pointer-lock
                    allow-popups
                    allow-popups-to-escape-sandbox
                    allow-presentation	
                    allow-scripts
                    allow-same-origin
                    allow-top-navigation
                    allow-top-navigation-by-user-activation"
				/>
			</PainelBinary>
		</>
	);
};

export default BinaryPainel;
