import Layout from '../components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { API } from '../config';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 345,
        margin: 5,
    },
    media: {
        height: 140,
    },
  });

const Home = ({ categories }) => {
    const classes = useStyles();
    console.log(categories);
    const listCategories = () =>
        categories.map((c, i) => (
            <Link href={`/links/${c.slug}`}>
                {/* <a style={{ border: '1px solid red' }} className="bg-light p-3 col-md-4">
                    <div>
                        <div className="row">
                            <div className="col-md-4">
                                <img
                                    src={c.image && c.image.url}
                                    alt={c.name}
                                    style={{ width: '100px', height: 'auto' }}
                                    className="pr-3"
                                />
                            </div>
                            <div className="col-md-8">
                                <h3>{c.name}</h3>
                            </div>
                        </div>
                    </div>
                </a> */}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={c.image && c.image.url}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {c.name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                    </Card>
            </Link>
        ));

    return (
        <Layout>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="font-weight-bold">Announcement and activities</h1>
                    <br />
                </div>
            </div>

            <div className="row">{listCategories()}</div>
        </Layout>
    );
};

Home.getInitialProps = async () => {
    const response = await axios.get(`${API}/categories`);
    return {
        categories: response.data
    };
};

export default Home;
