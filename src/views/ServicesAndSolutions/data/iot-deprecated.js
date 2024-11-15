// Internet of Things page data
import { IOT_ROUTE } from "./routes";

export default {
    link: IOT_ROUTE,
    title: "Internet of Things",
    description: {
        intro: "We define the right IoT landscape for you to kick start your IoT journey. A structured approach is taken to understand your business needs & offer quick ramp-up to discover your IoT needs & solutions, accelerating your time to market with low risk and zero lock-in.",
        sections: [
            {
                heading: "Physical Device",
                intro: `Our experts can help the customer to architect and develop the most appropriate wireless and network topology.
<br/><br/>
Expert in Wireless, Wi-Fi, ZigBee and Bluetooth Stack Development - has worked on a range of wireless technologies, including integrating wireless stacks, stack development and security enhancement for both low power (battery) operated devices and high-end devices running Linux. `,
                list: [
                    {
                        subheading: "Microcontroller based Wireless Expertise",
                        list: [
                            "Power optimized Wi-Fi",
                            "BT/BLE",
                            "ZigBee based Scalable/Complex Mesh systems",
                            "NFC",
                            "ISM band radios",
                            "GSM/GPRS/3G/LTE",
                            "Long range, low power RF systems (LoRA)",
                        ],
                    },
                    {
                        subheading: "Wireless Protocol Stack Development",
                        list: [
                            "Wi-Fi MAC porting for low power Embedded Devices",
                            "Custom TDMA based protocol Design and development",
                            "Wireless HART Stack Development",
                            "Ported IP and other Application protocol stack on top of wireless stacks",
                        ],
                    },
                    {
                        subheading: "Security Aspects of Wireless Devices",
                        list: [
                            "Custom WPA2 Supplicant for microcontrollers",
                            "Custom ECDH based Security schemes",
                            "SSL/TLS porting for microcontrollers",
                            "HTTPS based streaming to the cloud",
                            "Seamless and secure Provision schemes",
                        ],
                    },
                    {
                        subheading: "Linux based Wireless Expertize",
                        list: [
                            "Wi-Fi - IEEE 802.11 a/b/g/n",
                            "Wi-Fi - mesh (802.11s, B.A.T.M.A.N)",
                            "L2/L3 Routing",
                            "Telephony - Asterisk",
                            "Firewall - Linux IPTables",
                            "Wi-Fi Hotspot",
                        ],
                    },
                    {
                        subheading: "Linux based IoT Gateway",
                        list: [
                            "End Node interfacing using ZigBee, BT/BLE, Wi-Fi, 6LoWPAN, wirelessHART, simpliciTI",
                            "Gateway interfacing to Microsoft Azure, IBM bluemix or AWS IoT",
                            "Gateway application will be specific to the solution which will be developed using C/C++ or Java",
                            "End Node device discovery, Configuration, and Provisioning from Gateway",
                            "Device management for Gateway and End Node",
                            "Monitoring and Notifications",
                            "Security using SSL/TLS for all the cloud protocols above",
                            "Local GUI for the Gateway as well as WebGUI for remote management",
                        ],
                    },
                ],
            },
            {
                heading: "IoT Cloud Integration",
                intro: `The Cloud team focuses on IoT applications. This compliments our skill sets in embedded system engineering making us the End to End solution realization company in the IoT Space.
<br/><br/>
Our team has the skill set and the knowledge required for rapid solution realization making the best use of scalability and performance features of the following platforms:`,
                list: [
                    {
                        subheading: "Cloud Platform",
                        list: [
                            "Microsoft Azure IoT",
                            "AWS IoT",
                            "IBM Bluemix IOT foundation",
                            "Google cloud platform",
                        ],
                    },
                    {
                        subheading: "IoT Expertize",
                        list: [
                            "Application logic Development in.Net C#, Java, NodeJS, Python",
                            "Protocols: HTTP, AMQP, MQTT",
                            "Device identification, Security and authentication models for the various platforms",
                            "SQL and NoSQL databases",
                            "Stream analytics, Big data, and machine learning components",
                        ],
                    },
                ],
            },
            {
                heading: "IoT App Development",
                intro: `As part of Our end-to-end IoT solution offerings, we take care of mobile application development on iOS and Android.
<br /><br />
Our mobile application developers are adept at converting our customers’ creative ideas into a viable, sparkling application. We help define and customize the features and navigation to best suit your business, your unique target audience for the application as well as the target device. We have vast experience in IoT Android app development and iOS app development.
<br /><br />
Our IoT mobile app development team delivers custom, flexible, business-oriented solutions to all of our target industries in which we currently focus. We also have enhancement capability to provide value added mobile features such as Device Integration using Wi-Fi/ BLE/ NFC, GPS Tracking, Aggregator, Social Networking and Cloud API Integration. We have expertise in MQTT, AMQP, CoAP, HTTP/REST, RTSP etc.`,

                list: [
                    {
                        subheading: "Areas of Expertise",
                        list: [
                            "Native and Cross platform applications for Wearables using BLE/WIFI Technologies",
                            "Cloud Integration protocols - HTTP/REST, MQTT, RTSP, PUSH notification",
                            "Device Integration protocols - HTTP/REST, RTSP",
                            "Live streaming native applications for Healthcare and Wearables",
                            "Cross platform M2M Mobile applications for IOT",
                            "GPS based Mobile applications for Location tracking",
                        ],
                    },
                ],
            },

        ],
    },
};
