import { useLoaderData, Form, Link } from "react-router-dom";
import { Flex, Card } from "../styles"


function Index(props) {
    const cheeses = useLoaderData();

    return (
    <div>
        <h2>Create a New Cheese</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="Cheese Name" />
            <input type="text" name="countryOfOrigin" placeholder="Country" />
            <input type="text" name="image" placeholder="image URL" />
            <input type="submit" value="Create Cheese" />
        </Form>

        <h2>Cheeses</h2>
        <Flex>
            {cheeses.map((cheese) => (
                <Card key={cheese._id}>
                    <Link to={`/${cheese._id}`}>
                        <h1>{cheese.name}</h1>
                        <img src={cheese.image} alt={cheese.name}/>
                    </Link>
                </Card>
            ))}
        </Flex>
    </div>
    )
}

export default Index;