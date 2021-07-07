<div>
  <Head>
    <title>Portfolio | Blog 🕵️‍♂️ </title>
    <meta name="keywords" content="portfolio" />
  </Head>
  <Homes>
    <BlockContent
      blocks={post.body}
      projectId="d5wzzav5"
      dataset="production"
    />
    <h3>{post.body}</h3>
    <img src={urlFor(post?.mainImage).url()} />
    <button onClick={addLike}>{likes}💙</button>
  </Homes>
</div>;
