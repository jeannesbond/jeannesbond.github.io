$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "database.json",
		dataType: "json",
		success: function(data) {
			$.each(data, function(index, item) {
				var html = '';
				html += '<li class="list-group-item bg-light content">';
				html += '<h4><a href="blog/' + item.id + '/' + item.slug + '" class="text-decoration-none text-bg-light">' + item.judul + '</a></h4>';
				html += '<small>' + item.tanggal + '</small>';
				html += '</li>';
				$('#list-group').append(html);
			});
			$(".content").slice(0, 8).show();
			$("#loadMore").on("click", function(e){
				e.preventDefault();
				$(".content:hidden").slice(0, 8).slideDown();
					if($(".content:hidden").length == 0) {
						$("#loadMore").text("- Semua artikel sudah ditampilkan. -").addClass("noContent");
					}
			});
		}
	});
});