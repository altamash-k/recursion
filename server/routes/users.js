const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const {Ticket} = require("../models/ticket")
const jwt = require("jsonwebtoken")

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/add-ticket", async (req, res) => {
	try {
		// console.log(req.body.)
		 jwt.verify(
			req.body.token,
			process.env.JWTPRIVATEKEY ,
			async (err, payload) => {
			  if (err) {
				return res.status(401).send({
				  error: true,
				  message: "Please Login to continue.",
				});
			  }
			  const { _id } = payload;
			  const user = await User.findById(_id);
			  req.body.user = user;
			  await new Ticket({ ...req.body }).save();
			 res.json({ success: "Ticket created successfully" });
			}
		  );
	} catch (error) {
		console.log(error)
		res.json({ error: "Internal Server Error" });
	}
});

router.post("/list-ticket", async (req, res) => {
	try {
		console.log(req.body)
		 jwt.verify(
			req.body.token,
			process.env.JWTPRIVATEKEY ,
			async (err, payload) => {
			  if (err) {
				return res.status(401).send({
				  error: true,
				  message: "Please Login to continue.",
				});
			  }
			  const { _id } = payload;
			  const user = await User.findById(_id);
			  req.body.user = user;
			  const tickets = await Ticket.find({user}).exec()
			  console.log(tickets)
			 res.json({ success: "Ticket created successfully",data:tickets });
			}
		  );
	} catch (error) {
		console.log(error)
		res.json({ error: "Internal Server Error" });
	}
});

module.exports = router;