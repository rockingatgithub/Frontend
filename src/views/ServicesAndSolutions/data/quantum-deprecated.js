// Artificial Intelligence Page data
import { QUANTUM_ROUTE } from "./routes";

export default {
    link: QUANTUM_ROUTE,
    title: "Quantum Computing",
    description: {
        intro: "We are working on Quantum simulators, they are  software programs that run on classical computers and make it possible to run and test quantum programs in an environment that predicts how qubits will react to different operations considering the infancy stage of the Quantum hardware.",
        sections: [
            {
                heading: "Quantum computations",
                list: [
                    {
                        subheading: "Performing computations on a quantum computer or quantum simulator follow a basic process:",
                        list: [
                            "Access the qubits",
                            "Initialize the qubits to the desired state",
                            "Perform operations to transform the states of the qubits",
                            "Measure the new states of the qubits",
                        ],
                    },
                ],
            },
        ],
    },
};
