import { View } from "react-native";

export function Main(props) {
    const text = [
        `Hello, we are the team, a software factory specialized in providing digital tools for entrepreneurs and businesses.`,
        `We offer you the design and development of web, mobile and desktop applications, adapted to your needs and requirements.`,
        `We are aware of the costs involved in a project and we always offer the best quality/price ratio for our services and the technologies we use.`,
        `We can deliver your project on time.`,
    ];

    const P = () => text.map((t, index) => <p key={index} >{t}</p>);

    return (<View style={props?.styles}>
        <main>
            <P />
        </main>
    </View>);
}