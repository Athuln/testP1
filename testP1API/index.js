
/**
 * GET /store/testP1API
 * @tag testP1API
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @response 400 - Invalid ID supplied
 * @response 404 - Order not found
 */
const handler = async (event) => {

  const {req, res} = event
  
  // health check
  if (req.params.health === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
    return
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Happy Hacking`}))
  res.end()
  
}

export default handler
