// Quantum Computing Page data
import QImage from "@/assets/images/png/services/q-1.png";

import { QUANTUM_ROUTE } from "./routes";

export default {
    link: QUANTUM_ROUTE,
    title: "Quantum Computing",
    description: {
        intro: `

        <div class="image-wrapper margin">
            <img src=${QImage} alt="Quantum" class="img zoom-in-animation delay-350"/>
        </div>
        <p class="light-background">
            We are working on Quantum simulators, they are  software programs that run on classical computers and make it possible to run and test quantum programs in an environment that predicts how qubits will react to different operations considering the infancy stage of the Quantum hardware.
        </p>
            <ul class="ul list-col-wrapper">
                <li class="light-background list-col-sm">Access the qubits</li>
                <li class="light-background list-col-sm">Initialize the qubits to the desired state</li>
                <li class="light-background list-col-sm">Perform operations to transform the states of the qubits</li>
                <li class="light-background list-col-sm">Measure the new states of the qubits</li>
            </ul>
        `,
        sections: [],
    },
};
