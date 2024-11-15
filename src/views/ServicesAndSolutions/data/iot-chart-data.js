export const chartData = {
    labels: [
        "Ultrasounds/Radio",
        "RFID/NFC",
        "Magnetic",
        "Electric",
        "Leaks/Levels",
        "Force",
        "Temperature",
        "Motion",
        "Humidity",
        "Optical",
        "Flow",
        "Acoustic",
        "Chemical/Gas",
        "Proximity",
        "Vibration",
        "Acceleration/Tilt",
    ],
    datasets: [{
        data: [
            7,
            8,
            10,
            4,
            4,
            6,
            11,
            3,
            12,
            6,
            3,
            4,
            5,
            4,
            4,
            9,
        ],
        backgroundColor: [
            "#4caf50",
            "#FDC100",
            "#F90F01",
            "#346601",
            "#A7A7A7",
            "#FBD9BB",
            "#005bff",
            "#30859A",
            "#923931",
            "#F95252",
            "#7030A2",
            "#0B1B5C",
            "#0E70C1",
            "#24AEF1",
            "#2EB050",
            "#93D14E",
        ],
        hoverBackgroundColor: "#DE1B2F",
    }],
};

export const options = {
    plugins: {
        labels: {
            render(args) {
                if (window.innerWidth > 600) return args.label;
                return "";
            },
            precision: 0,
            showZero: true,
            fontSize: 12,
            fontFamily: "body-bold",
            fontColor(data) {
                const hex = data.dataset.backgroundColor[data.index].split("#")[1];
                const rgb = {
                    r: parseInt(hex[0] + hex[1], 16),
                    g: parseInt(hex[2] + hex[3], 16),
                    b: parseInt(hex[4] + hex[5], 16),
                };

                const threshold = 140;
                const luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
                return luminance > threshold ? "white" : "white";
            },
        },
    },
};
