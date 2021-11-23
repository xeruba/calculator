<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMathOperationLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('math_operation_logs', function (Blueprint $table) {
            $table->id();
            $table->ipAddress('ip');
            $table->integer('timestamp');
            $table->string('operation', 100);
            $table->double('result', 12, 4);
            $table->boolean('bonus');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('math_operation_logs');
    }
}
