import React from "react";
import styles from "./titulos.module.css";
import Header from "../components/header";
import Section from "../components/section";
import Card from "../components/cards";
import Footer from "../components/footer";

export default function CorinthiansTrophiesPage() {
    return (
        <div className={styles.container}>

            <Header />

            <main className={styles.main}>
                <Section titulo={"Conquistas Principais"}>

                        <Card ano={"2012"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 1 X 0 Chelsea"} textoAlt={"Troféu da Copa do Mundo de Clubes da FIFA 2012"} titulo={"Copa do Mundo de Clubes da FIFA"} />

                        <Card ano={"2012"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 2 X 0 Boca Juniors"} textoAlt={"Troféu da Copa Libertadores da América 2012"} titulo={"Copa Libertadores da América"} />

                        <Card ano={"2000"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 0(4) X 0(3) Vasco"} textoAlt={"Troféu da Copa Libertadores da América 2000"} titulo={"Copa Libertadores da América"} />

                </Section>

                <Section titulo={"Campeonato Brasileiro"}>
                    <Card ano={"2017"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"7º título brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2017"} titulo={"Campeonato Brasileiro"} />

                    <Card ano={"2015"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"6º título brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2015"} titulo={"Campeonato Brasileiro"} />

                    <Card ano={"2011"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"5º título brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2011"} titulo={"Campeonato Brasileiro"} />

                </Section>

                <Section titulo={"Campeonatos Estaduais"}>

                        <Card ano={"2023"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"30º título estadual"} textoAlt={"Troféu do Campeonato Paulista 2023"} titulo={"Campeonato Paulista"} />

                        <Card ano={"2019"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"29º título estadual"} textoAlt={"Troféu do Campeonato Paulista 2019"} titulo={"Campeonato Paulista"} />

                        <Card ano={"2018"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"28º título estadual"} textoAlt={"Troféu do Campeonato Paulista 2018"} titulo={"Campeonato Paulista"} />

                </Section>

                <Section titulo={"Outras Conquistas"}>

                        <Card ano={"2009"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 2 X 0 Internacional"} textoAlt={"Troféu da Copa do Brasil 2009"} titulo={"Copa do Brasil"} />

                        <Card ano={"2013"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 3 X 1 São Paulo"} textoAlt={"Troféu da Recopa Sul-Americana 2013"} titulo={"Recopa Sul-Americana"} />

                        <Card ano={"2002"} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 3 X 2 Brasiliense"} textoAlt={"Troféu da Copa do Brasil 2002"} titulo={"Copa do Brasil"} />
                    
                </Section>
            </main>

            <Footer />
        </div>
    );
};