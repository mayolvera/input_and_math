$("body").on("keyup keydown keypress change", ".item input", function (e) {
	let total = 0;

	$("tr.item").each(function () {
		const $this_row = $(this);
		const quantity_field = $this_row.find(".qty");
		let qty = quantity_field.val();
		const cost_field = $this_row.find(".cost");
		let cost = cost_field.val();
		const tariff_pct = $this_row.data("tariff-percent");
		let pct = parseFloat(tariff_pct);

		pct = pct / 100

		qty = parseFloat(qty);
		cost = parseFloat(cost);

		const pre_tariff_total = qty * cost;

		const post_tariff_total = (pre_tariff_total + (pre_tariff_total * pct));

		console.log(pre_tariff_total);
		console.log(post_tariff_total);

	});
});