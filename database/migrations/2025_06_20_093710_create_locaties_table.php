<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('locaties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('userid')->constrained('users')->onDelete('cascade');
            $table->string('name');
            $table->json('stats');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('locaties');
    }
};